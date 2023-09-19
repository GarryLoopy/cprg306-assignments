import Link from 'next/link';

export default function StudentInfo() {
    return (
        <>
            <div >
                <p>Name: Garry Jr Dayag</p>
                <p>Course: CPRG 306 F</p>
                <Link href="https://github.com/GarryLoopy" class="hover:text-violet-400">https://github.com/GarryLoopy</Link>
            </div>
        </>
    );
}