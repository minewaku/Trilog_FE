import React from 'react';

const Test = () => {
    return (
        <div className="flex h-screen w-screen flex-col overflow-hidden">
            <div className="h-12 w-full bg-red-800">this is a header</div>
            <div className="flex w-full flex-1 flex-row overflow-hidden">
                <div className="sticky top-0 z-0 h-full w-32 bg-lime-600">
                    <div className="">Left sidebar</div>
                </div>

                <div className="relative z-20 flex h-full flex-1 overflow-y-scroll bg-pink-300">
                    <div className="flex flex-1 flex-col items-center space-y-8 overflow-x-visible overflow-y-scroll p-4">
                        This is the content list
                        <div className="relative h-52 w-full bg-blue-800">
                            hallo
                            <div className="absolute left-[-92px] z-30 h-96 w-96 bg-gray-700"></div>
                        </div>
                        <div className="h-52 w-full bg-green-800">hallo</div>
                        <div className="h-52 w-full bg-yellow-800">hallo</div>
                        <div className="h-52 w-full bg-pink-800">hallo</div>
                        <div className="h-52 w-full bg-purple-800">hallo</div>
                        <div className="h-52 w-full bg-indigo-800">hallo</div>
                        <div className="h-52 w-full bg-red-800">hallo</div>
                        <div className="h-52 w-full bg-blue-800">hallo</div>
                        <div className="h-52 w-full bg-green-800">hallo</div>
                        <div className="h-52 w-full bg-yellow-800">hallo</div>
                        <div className="h-52 w-full bg-pink-800">hallo</div>
                        <div className="h-52 w-full bg-purple-800">hallo</div>
                        <div className="h-52 w-full bg-indigo-800">hallo</div>
                        <div className="h-52 w-full bg-red-800">hallo</div>
                        <div className="h-52 w-full bg-blue-800">hallo</div>
                        <div className="h-52 w-full bg-green-800">hallo</div>
                        <div className="h-52 w-full bg-yellow-800">hallo</div>
                        <div className="h-52 w-full bg-pink-800">hallo</div>
                        <div className="h-52 w-full bg-purple-800">hallo</div>
                        <div className="h-52 w-full bg-indigo-800">hallo</div>
                    </div>

                    <div className="sticky right-0 top-0 flex w-80 flex-col gap-4 bg-green-300 p-4">
                        <div className="flex h-[240px] rounded-lg bg-slate-400">
                            <div className="">
                                <div className="h-10 w-10 bg-red-700"></div>
                            </div>
                            <div className="flex flex-col">
                                <div className="">Hallo</div>
                                <div className="">Hallo ini adalah content yang akan di scroll kebawah dan keatas ketika scroll kebawah dan keatas juga di content sebelahnya</div>
                            </div>
                        </div>
                        <div className="h-[240px] rounded-lg bg-slate-400">Left sidebar</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
