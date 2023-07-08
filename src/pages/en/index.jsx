import Header from "../../components/en/header";
import Setinha from "../../components/en/Setinha";
import SelectLang from "../../components/SelectLang";
export default function Home() {
  return (
    <div className="min-h-full items-center columns-1 justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <Header />
     
      <Setinha />
       
      <SelectLang/>
   
    </div>
  );
}
