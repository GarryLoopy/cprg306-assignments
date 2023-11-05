import Link from 'next/link';

export default function LinkItem({ path, title, onSelect, selectedPath}) {

    const handleOnSelect = () => {
        onSelect(path);
    }

    return (
        <Link href={path} 
                onClick={handleOnSelect} 
                className={`hover:text-white active:bg-slate-700 hover:bg-gray-800 
                hover:border-gray-700 text-lg py-2 px-4 border border-gray-800 
                bg-gray-950 rounded-md ${selectedPath ? "bg-slate-800 text-white border-gray-900 rounded-b-lg" : ""}`}>
                    {title}
        </Link>
    );
}