import Image from "next/image";
import Link from "next/link";


const HomePage = () => {

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

    return (

        <div>
            {/* Friends to keep close in your life
             this section here */}
            <div className="max-w-5xl my-5 mx-auto  text-center">
                <h2 className="font-bold text-4xl">Friends to keep close in your life</h2>
                <p className="my-3">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className="btn bg-green-950 text-white"> + Add a Friend</button>
            </div>

            {/* total friends var are starts here */}

            <div className="max-w-5xl my-5 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-base-100  shadow-sm">
                    <div className=" text-center card-body">
                        <h1 className="text-4xl font-bold">{datas.length}</h1>
                        <p>Total Friends</p>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <div className=" text-center card-body">
                        <h1 className="text-4xl font-bold">03</h1>
                        <p>On Track</p>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <div className=" text-center card-body">
                        <h1 className="text-4xl font-bold">06</h1>
                        <p>Need Attention</p>
                    </div>
                </div>
                <div className="card bg-base-100  shadow-sm">
                    <div className=" text-center card-body">
                        <h1 className="text-4xl font-bold">12</h1>
                        <p>Interactions This Month</p>
                    </div>
                </div>
            </div>

            {/* Home card start here */}

            <div className="max-w-5xl my-5 mx-auto">
                <div>
                    <h1 className="text-4xl font-bold  border-t-1 border-gray-400 py-6">Your Friends</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {datas.map(data =>

                        <Link key={data.id} href={`/home/${data.id}`}>
                            <div key={data.id} className="card bg-base-100  shadow-xl">
                                <figure className="px-5 pt-5">
                                    <Image
                                        src={data.picture}
                                        alt={data.name}
                                        className="rounded-full"
                                        width={140}
                                        height={140}>

                                    </Image>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title font-bold text-green-950">{data.name}</h2>
                                    <p className="text-gray-400">{data.days_since_contact}d ago</p>
                                    <div>
                                        {/* {data.tags(map((tag,index)=> <button key={index}>{tag}</button> ))} */}

                                    </div>
                                    <button></button>
                                    <div className="card-actions">
                                        <button className={`btn rounded-4xl text-white
                                ${data.status === 'overdue' ? 'bg-red-500' : 'bg-green-950'}`}
                                        >{data.status}</button>
                                    </div>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>

            </div>
        </div>

    );
};

export default HomePage;