export default function Button({ content }) {
    return (
        <button class="px-2 py-3 text-center bg-slate-900 hover:bg-slate-800 active:bg-slate-700 rounded-md">{content}</button>
    );
}