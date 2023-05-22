import {execSync} from 'child_process';
import detect from 'detect-port';

export async function setupE2eTest(){
    await startSupabase();
    reseedDB();
}

async function startSupabase(){
    const port = await detect(64321);
    if(port !== 64321){
        return;
    }
    console.warn('Suapabase not running, starting it now...');
    execSync('yarn supabase start');
}

function reseedDB(){
    execSync(
        "SET PGPASSWORD=postgres&&psql -U postgres -h 127.0.0.1 -p 54322 -f supabase/clear-db-data.sql",
        {
            stdio: 'ignore'
        }
    );
}