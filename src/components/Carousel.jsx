import { Left, Right } from "neetoicons";
import { Button } from "neetoui";

const Carousel = ({ imageUrls, title }) => (
  <div className="flex items-center">
    <Button
      className="shrink-0 focus-within:ring-0 hover:bg-transparent"
      icon={Left}
      style="text"
    />
    <img
      alt={title}
      className="max-w-56 h-56 max-h-56 w-56"
      src={imageUrls[0]}
    />
    <Button
      className="shrink-0 focus-within:ring-0 hover:bg-transparent"
      icon={Right}
      style="text"
    />
  </div>
);

export default Carousel;
