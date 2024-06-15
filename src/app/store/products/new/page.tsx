import HeadForm from "@/components/ProductForm/HeadForm";
import InfoForm from "@/components/ProductForm/InfoForm";
import SubForm from "@/components/ProductForm/SubFrom";

export default function NewProduct(){
    return(
        <section className="flex flex-col w-full items-stretch p-2 gap-5 lg:gap-10">
            <h1 className="text-2xl font-bold">Create Product</h1>
            <div className="grid lg:grid-cols-[70%_auto] gap-10 ">
                <div className="flex flex-col gap-10 space-y-4 ">
                    <HeadForm />
                    <SubForm />
                </div>
                <InfoForm />
            </div>
        </section>
    )
}