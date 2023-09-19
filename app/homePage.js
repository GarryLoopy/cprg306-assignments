import Link from 'next/link';

export default function HomePage() {
    return (
        <div class="my-2 mx-1">
            <Link href="/" class="px-5 py-1 bg-violet-800 hover:bg-violet-900 max-w-sm rounded-md">Home</Link>
        </div>
        
    );
}
