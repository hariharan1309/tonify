import Select from "../Select";
import FileUpload from "./FileUpload";
import MultipleFileUpload from "./MultipleFileUpload";

export default function InfoForm(){
    return(
        <section className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4 shadow-md  sm:p-5 md:p-6">
           <div className="flex flex-col gap-5">
                <Select title='Product Type'/>
                <Select title='Product Category'/>
                <FileUpload title="Thumbnail"/>
                <MultipleFileUpload title="Gallery" />
           </div>
        </section>
    )
}