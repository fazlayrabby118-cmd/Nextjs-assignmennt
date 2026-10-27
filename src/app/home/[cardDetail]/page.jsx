import Image from "next/image";


const CardDetails = () => {
    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 rounded-xl border border-blue-300 bg-white p-4 shadow-sm md:grid-cols-[290px_1fr]">

                {/* Left Side */}
                <div className="space-y-3">
                    {/* Profile Card */}
                    <div className="rounded-xl bg-white p-5 text-center shadow-md">
                        <Image
                            src="https://i.pravatar.cc/150?img=1"
                            alt="Emma Wilson"
                            width={70}
                            height={70}
                            className="mx-auto rounded-full"
                        />

                        <h2 className="mt-3 font-bold text-slate-800">
                            Emma Wilson
                        </h2>

                        <span className="mt-2 inline-block rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                            Overdue
                        </span>

                        <div>
                            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                                FAMILY
                            </span>
                        </div>

                        <p className="mt-3 text-sm italic text-slate-500">
                            Former colleague, great mentor
                        </p>

                        <p className="mt-2 text-xs text-slate-500">
                            Preferred: email
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <button className="w-full rounded border bg-white p-3 hover:bg-slate-100">
                        ♧ Snooze 2 Weeks
                    </button>

                    <button className="w-full rounded border bg-white p-3 hover:bg-slate-100">
                        ▣ Archive
                    </button>

                    <button className="w-full rounded border bg-white p-3 text-red-500 hover:bg-red-50">
                        ♧ Delete
                    </button>
                </div>

                {/* Right Side */}
                <div className="space-y-5">
                    {/* Statistics */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-xl bg-white p-5 text-center shadow-sm">
                            <h2 className="text-3xl font-bold text-green-950">62</h2>
                            <p className="mt-2 text-sm text-slate-500">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-5 text-center shadow-sm">
                            <h2 className="text-3xl font-bold text-green-950">30</h2>
                            <p className="mt-2 text-sm text-slate-500">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-5 text-center shadow-sm">
                            <h2 className="text-2xl font-bold text-green-950">
                                Feb 27, 2026
                            </h2>
                            <p className="mt-2 text-sm text-slate-500">
                                Next Due
                            </p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="font-semibold text-green-950">
                                Relationship Goal
                            </h2>

                            <button className="rounded border px-4 py-2 text-sm hover:bg-slate-50">
                                Edit
                            </button>
                        </div>

                        <p className="mt-3 text-slate-500">
                            Connect every{" "}
                            <span className="font-bold text-slate-800">
                                30 days
                            </span>
                        </p>
                    </div>

                    {/* Quick Check-In */}
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                        <h2 className="mb-4 font-semibold text-green-950">
                            Quick Check-In
                        </h2>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <button className="rounded-lg border bg-slate-50 p-5 hover:bg-green-50">
                                <div className="text-2xl">📞</div>
                                <p className="mt-2">Call</p>
                            </button>

                            <button className="rounded-lg border bg-slate-50 p-5 hover:bg-green-50">
                                <div className="text-2xl">💬</div>
                                <p className="mt-2">Text</p>
                            </button>

                            <button className="rounded-lg border bg-slate-50 p-5 hover:bg-green-50">
                                <div className="text-2xl">📹</div>
                                <p className="mt-2">Video</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;