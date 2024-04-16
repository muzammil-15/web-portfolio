

const Loading = () => {


    return (
        <main className="w-full">


            <div className='w-full h-[90vh] flex justify-center items-center '>
                <div
                    className="inline-block h-10 w-10 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                    role="status">
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span>
                </div>
            </div>

        </main>
    );
};

export default Loading;
