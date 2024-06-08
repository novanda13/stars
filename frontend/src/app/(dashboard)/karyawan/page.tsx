import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    return [
        {
            id: "b53ed2f9",
            amount: 150,
            status: "success",
            email: "alice@example.com",
        },
        {
            id: "3f8de91a",
            amount: 200,
            status: "pending",
            email: "bob@example.com",
        },
        {
            id: "78d2e5f1",
            amount: 50,
            status: "failed",
            email: "carol@example.com",
        },
        {
            id: "1a8e3b57",
            amount: 300,
            status: "success",
            email: "dave@example.com",
        },
        {
            id: "6f4ae72c",
            amount: 400,
            status: "pending",
            email: "eve@example.com",
        },
        {
            id: "92bed14e",
            amount: 250,
            status: "success",
            email: "frank@example.com",
        },
        {
            id: "5b6df94a",
            amount: 100,
            status: "failed",
            email: "grace@example.com",
        },
        {
            id: "39afe4b6",
            amount: 180,
            status: "pending",
            email: "heidi@example.com",
        },
        {
            id: "24dbe7a1",
            amount: 120,
            status: "success",
            email: "ivan@example.com",
        },
        {
            id: "a73c5e8d",
            amount: 90,
            status: "failed",
            email: "judy@example.com",
        },
        {
            id: "8d4ce12b",
            amount: 220,
            status: "pending",
            email: "mallory@example.com",
        },
        {
            id: "c6b5e8a4",
            amount: 350,
            status: "success",
            email: "oscar@example.com",
        },
        {
            id: "14df3e2f",
            amount: 275,
            status: "failed",
            email: "peggy@example.com",
        },
        {
            id: "9f3ae6d8",
            amount: 400,
            status: "pending",
            email: "trent@example.com",
        },
        {
            id: "7e5df24c",
            amount: 50,
            status: "success",
            email: "victor@example.com",
        },
        {
            id: "2b6de98a",
            amount: 170,
            status: "pending",
            email: "walter@example.com",
        },
        {
            id: "3d4be92c",
            amount: 310,
            status: "failed",
            email: "yvonne@example.com",
        },
        {
            id: "1e9be3f7",
            amount: 280,
            status: "success",
            email: "zara@example.com",
        },
        {
            id: "4b5df98c",
            amount: 130,
            status: "pending",
            email: "aaron@example.com",
        },
        {
            id: "7f3ae2d9",
            amount: 190,
            status: "failed",
            email: "bryce@example.com",
        },
    ];

}

export default async function Karyawan() {
    const data = await getData()

    return (
        <article className="h-full overflow-y-auto w-full p-5 md:p-6 lg:p-8">
            <section className="w-full sm:w-9/12 md:w-7/12">
                <h1 className="font-semibold text-[30px] text-gray-800">Produk</h1>
                <p className="text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem repellat voluptatem aperiam nam nemo praesentium, nesciunt tempora perferendis.</p>
            </section>
            <div className="w-full mt-5">
                <DataTable columns={columns} data={data} />
            </div>
        </article>
    )
}