import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface Hadith {
  id: number;
  hadith_id: number;
  source: string;
  chapter_no: number;
  hadith_no: number | string;
  chapter: string;
  chain_indx: string;
  text_ar: string;
  text_en: string;
}

interface HadithForDB {
  original_id: number;
  hadith_id: number;
  source: string;
  chapter_no: number;
  hadith_no: string;
  chapter: string;
  chain_indx: string;
  text_ar: string;
  text_en: string;
}

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/Utshow327/All-Hadiths-Of-Islam-Json/main/';
const JSON_FILES = [
  'All%20Hadiths%20Arabic%20%26%20English-part1.json',
  'All%20Hadiths%20Arabic%20%26%20English-part2.json',
  'All%20Hadiths%20Arabic%20%26%20English-part3.json',
];

async function fetchHadithsFromGitHub(fileUrl: string): Promise<Hadith[]> {
  console.log(`Fetching: ${fileUrl}`);
  const response = await fetch(fileUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${fileUrl}: ${response.statusText}`);
  }

// After
const data = await response.json() as Hadith[];
console.log(`Fetched ${data.length} hadiths from file`);
return data;
}

async function importHadithsBatch(hadiths: Hadith[]) {
  const BATCH_SIZE = 1000;
  let imported = 0;

  for (let i = 0; i < hadiths.length; i += BATCH_SIZE) {
    const batch = hadiths.slice(i, i + BATCH_SIZE);

    const dbRecords: HadithForDB[] = batch.map(h => ({
      original_id: h.id,
      hadith_id: h.hadith_id,
      source: h.source,
      chapter_no: h.chapter_no,
      hadith_no: String(h.hadith_no),
      chapter: h.chapter,
      chain_indx: h.chain_indx,
      text_ar: h.text_ar,
      text_en: h.text_en,
    }));

    const { error } = await supabase
      .from('hadiths')
      .insert(dbRecords);

    if (error) {
      console.error(`Error importing batch ${i / BATCH_SIZE + 1}:`, error);
      throw error;
    }

    imported += batch.length;
    console.log(`Imported ${imported} / ${hadiths.length} hadiths (${((imported / hadiths.length) * 100).toFixed(1)}%)`);
  }

  return imported;
}

async function main() {
  console.log('🚀 Starting hadith import process...\n');

  try {
    console.log('📊 Checking existing records...');
    const { count, error: countError } = await supabase
      .from('hadiths')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error checking existing records:', countError);
    } else {
      console.log(`Found ${count || 0} existing hadiths in database`);

      if (count && count > 0) {
        console.log('⚠️  Database already contains hadiths. Skipping import.');
        console.log('💡 To re-import, first delete existing records via Supabase dashboard.');
        return;
      }
    }

    let totalImported = 0;

    for (let i = 0; i < JSON_FILES.length; i++) {
      const fileUrl = GITHUB_RAW_BASE + JSON_FILES[i];
      console.log(`\n📥 Processing file ${i + 1}/${JSON_FILES.length}...`);

      const hadiths = await fetchHadithsFromGitHub(fileUrl);
      const imported = await importHadithsBatch(hadiths);
      totalImported += imported;

      console.log(`✅ Completed file ${i + 1}/${JSON_FILES.length}: ${imported} hadiths imported`);
    }

    console.log(`\n✨ Import completed successfully!`);
    console.log(`📚 Total hadiths imported: ${totalImported.toLocaleString()}`);

    console.log('\n🔍 Verifying import...');
    const { count: finalCount, error: finalCountError } = await supabase
      .from('hadiths')
      .select('*', { count: 'exact', head: true });

    if (finalCountError) {
      console.error('Error verifying import:', finalCountError);
    } else {
      console.log(`✅ Database now contains ${finalCount?.toLocaleString()} hadiths`);
    }

    console.log('\n📖 Sample hadith sources:');
    const { data: sources } = await supabase
      .from('hadiths')
      .select('source')
      .limit(1000);

    if (sources) {
      const uniqueSources = [...new Set(sources.map(s => s.source))];
      uniqueSources.forEach(source => console.log(`   - ${source}`));
    }

  } catch (error) {
    console.error('\n❌ Import failed:', error);
    process.exit(1);
  }
}

main();
