export function Spinner() {
    return (
        <div className="flex justify-center items-center ">
            <div
                className="h-8 w-8 inline-block rounded-full border-4 border-r-black border-solid animate-spin"
                role="status"
            ></div>
        </div>
    );
}
