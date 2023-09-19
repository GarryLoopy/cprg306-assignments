import Link from 'next/link';

export default function Week({ weekNumber }) {
    return (
        <div class="my-2 mx-1">
            <Link href={`week${weekNumber}`} class="px-5 py-1 bg-violet-800 hover:bg-violet-900 max-w-sm rounded-md">Week {weekNumber}</Link>
        </div>
    );
}