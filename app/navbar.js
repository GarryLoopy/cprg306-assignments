import Link from 'next/link';

export default function NavBar() {
    return (
        <nav class="text-white py-4 border-b-2 border-slate-900">
            <div class="container px-2">
                <ul class="flex space-x-3">
                    <li><LinkItem path='/' title='Home' /></li>
                    <li><LinkItem path='/week2' title='Week 2' /></li>
                    <li><LinkItem path='/week3' title='Week 3' /></li>
                    <li><LinkItem path='/week4' title='Week 4' /></li>

                    <li><LinkItem path='/testPage' title='Test Page' /></li>
                </ul>
            </div>
        </nav>
    );
}

function LinkItem({ path, title}) {
    return (
        <Link href={path} class="hover:text-white hover:bg-violet-800 text-lg py-2 px-4 bg-slate-900 rounded-md">{title}</Link>
    );
}