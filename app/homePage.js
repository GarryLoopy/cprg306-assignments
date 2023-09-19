import Link from 'next/link';

export default function HomePage() {
    return (
        <div class="my-2">
            <Link href="/" class="px-5 py-1 bg-violet-800 hover:bg-violet-900 max-w-sm rounded-r-md font-semibold">Home</Link>
        </div>
        
    );
}
