import Heading from "@/app/components/atoms/Heading";
import Paragraf from "@/app/components/atoms/Paragraf";

const NotFound = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <Heading variant="h2" classesName="text-center">
        Data is empty !
      </Heading>
      <Paragraf className="text-center">
        sample data exist <b>salmon</b>
      </Paragraf>
    </div>
  );
};

export default NotFound;
