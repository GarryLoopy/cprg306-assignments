import Link from 'next/link';

export default function StudentInfo() {
    return (
        <>
            <div class="ml-4 mt-4 mb-4">
                <p>Name: Garry Jr Dayag</p>
                <p>Course: CPRG 306 F</p>
                <Link href="https://github.com/GarryLoopy" class="hover:text-violet-400">https://github.com/GarryLoopy</Link>
            </div>
        </>
    );
}