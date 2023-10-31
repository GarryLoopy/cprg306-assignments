export default function NavButton( {contents, onButtonClick, selectedState} ) {

    const handleButtonClick = () => {
        onButtonClick(contents);
    }

    return ( 
        <button className={`flex-1 p-4 border rounded-lg mt-2 mb-2 text-gray-400 
                           border-gray-800 bg-gray-950 hover:bg-gray-800 hover:border-gray-700 
                           hover:cursor-pointer hover:text-white ${selectedState ? "bg-gray-900 border-gray-800 text-gray-100" : ""}`}
                onClick={handleButtonClick}>
            {contents}
        </button>
    );
}