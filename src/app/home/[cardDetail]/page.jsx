import Image from "next/image";

    const datas = [
    {
        id: 1,
        name: "John Doe",
        picture: "https://i.pravatar.cc/150?img=1",
        email: "john@example.com",
        days_since_contact: 12,
        status: "overdue",
        tags: ["college", "close friend"],
        bio: "Met in university. Love hiking together.",
        goal: 14,
        next_due_date: "2026-11-05"
    },
    {
        id: 2,
        name: "Jane Smith",
        picture: "https://i.pravatar.cc/150?img=2",
        email: "jane@example.com",
        days_since_contact: 5,
        status: "upcoming",
        tags: ["school", "best friend"],
        bio: "School friend who enjoys reading books.",
        goal: 10,
        next_due_date: "2026-10-31"
    },
    {
        id: 3,
        name: "Michael Brown",
        picture: "https://i.pravatar.cc/150?img=3",
        email: "michael@example.com",
        days_since_contact: 20,
        status: "overdue",
        tags: ["work", "colleague"],
        bio: "Former colleague who loves technology.",
        goal: 14,
        next_due_date: "2026-11-09"
    },
    {
        id: 4,
        name: "Emily Davis",
        picture: "https://i.pravatar.cc/150?img=4",
        email: "emily@example.com",
        days_since_contact: 3,
        status: "upcoming",
        tags: ["family", "cousin"],
        bio: "My cousin who enjoys traveling.",
        goal: 7,
        next_due_date: "2026-10-29"
    },
    {
        id: 5,
        name: "David Wilson",
        picture: "https://i.pravatar.cc/150?img=5",
        email: "david@example.com",
        days_since_contact: 8,
        status: "upcoming",
        tags: ["college", "classmate"],
        bio: "College classmate interested in programming.",
        goal: 14,
        next_due_date: "2026-11-01"
    },
    {
        id: 6,
        name: "Sophia Martinez",
        picture: "https://i.pravatar.cc/150?img=6",
        email: "sophia@example.com",
        days_since_contact: 18,
        status: "overdue",
        tags: ["close friend", "travel"],
        bio: "A close friend who loves exploring new places.",
        goal: 14,
        next_due_date: "2026-11-04"
    },
    {
        id: 7,
        name: "Daniel Anderson",
        picture: "https://i.pravatar.cc/150?img=7",
        email: "daniel@example.com",
        days_since_contact: 2,
        status: "upcoming",
        tags: ["football", "friend"],
        bio: "Football fan who enjoys playing every weekend.",
        goal: 7,
        next_due_date: "2026-10-30"
    },
    {
        id: 8,
        name: "Olivia Thomas",
        picture: "https://i.pravatar.cc/150?img=8",
        email: "olivia@example.com",
        days_since_contact: 25,
        status: "overdue",
        tags: ["university", "friend"],
        bio: "University friend who enjoys photography.",
        goal: 14,
        next_due_date: "2026-11-10"
    },
    {
        id: 9,
        name: "James Taylor",
        picture: "https://i.pravatar.cc/150?img=9",
        email: "james@example.com",
        days_since_contact: 6,
        status: "upcoming",
        tags: ["gaming", "close friend"],
        bio: "Gaming partner who loves multiplayer games.",
        goal: 10,
        next_due_date: "2026-11-02"
    },
    {
        id: 10,
        name: "Isabella Moore",
        picture: "https://i.pravatar.cc/150?img=10",
        email: "isabella@example.com",
        days_since_contact: 15,
        status: "overdue",
        tags: ["family", "friend"],
        bio: "A thoughtful friend who enjoys cooking.",
        goal: 14,
        next_due_date: "2026-11-06"
    },
    {
        id: 11,
        name: "Benjamin Lee",
        picture: "https://i.pravatar.cc/150?img=11",
        email: "benjamin@example.com",
        days_since_contact: 4,
        status: "upcoming",
        tags: ["programming", "college"],
        bio: "Programming enthusiast learning web development.",
        goal: 7,
        next_due_date: "2026-10-28"
    },
    {
        id: 12,
        name: "Mia Clark",
        picture: "https://i.pravatar.cc/150?img=12",
        email: "mia@example.com",
        days_since_contact: 30,
        status: "overdue",
        tags: ["childhood friend", "close friend"],
        bio: "A childhood friend with many wonderful memories.",
        goal: 14,
        next_due_date: "2026-11-12"
    }
];
                        
const CardDetails = async ({ params }) => {



    const { cardDetail } = await params;
   const data = datas.find(
    item => item.id === parseInt(cardDetail)
);

console.log(data);

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 rounded-xl border border-blue-300 bg-white p-4 shadow-sm md:grid-cols-[290px_1fr]">

                {/* Left Side */}
                <div className="space-y-3">
                    {/* Profile Card */}
                    
                     <div className="rounded-xl bg-white p-5 text-center shadow-md">
                            <Image
                                src={data.picture}
                                alt={data.name}
                                width={70}
                                height={70}
                                className="mx-auto rounded-full"
                            />

                            <h2 className="mt-3 font-bold text-slate-800">
                                {data.name}
                            </h2>

                            <span className="mt-2 inline-block rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                                {data.status}
                            </span>

                            <div>
                                <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                                    FAMILY
                                </span>
                            </div>

                            <p className="mt-3 text-sm italic text-slate-500">
                                {data.bio}
                            </p>

                            <p className="mt-2 text-xs text-slate-500">
                                Preferred: {data.email}
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