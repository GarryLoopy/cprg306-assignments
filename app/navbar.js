import Link from 'next/link';

const currentWeek = 8;

const getLinkItems = () => {
    let linkItems = [];
    for (let i = 2; i <= currentWeek; i++)
    {
        linkItems.push(
            <LinkItem path={`week${i}`} title={`Week ${i}`}/>
        )
    }

    return linkItems;
}

{/* <li className={`text-center p-4 border rounded-md text-gray-400 border-gray-800 
bg-gray-950 hover:bg-gray-800 hover:border-gray-700 hover:cursor-pointer 
hover:text-white active:bg-slate-700 ${selectedItem ? "bg-slate-800 text-white border-gray-900" : ""}`} onClick={handleOnItemSelect}>    
<h2 className="text-lg text-gray-400 capitalize">{item.name}</h2>
<p className="text-md">Buy {item.quantity} in {item.category}</p>
</li> */}

export default function NavBar() {

    const linkItems = getLinkItems();
    return (
        <nav className="text-white py-4 px-4 border-b-2 border-gray-800">
            <div>
                <ul className="flex space-x-3">
                    <li><LinkItem path='/' title='Home' /></li>
                    {
                        linkItems.map(
                            (linkItem, index) => (
                                <li key={index}>{linkItem}</li>
                            )
                        )
                    }

                    <li><LinkItem path='/studentProject' title='Other students project' /></li>
                </ul>
            </div>
        </nav>
    );
}

function LinkItem({ path, title}) {
    return (
        <Link href={path} className="hover:text-white active:bg-slate-700 hover:bg-gray-800 hover:border-gray-700 text-lg py-2 px-4 border border-gray-800 bg-gray-950 rounded-md">{title}</Link>
    );
}