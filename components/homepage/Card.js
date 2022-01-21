function Cards(props) {
  return (
    <div className="bg-gray-800 px-4 py-4 w-[560px] rounded mr-3">
      <p className="text-white font-medium font-serif text-3xl mb-4">
        {props.title}
      </p>
      <p className="text-white w-[520px] font-normal text-justify font-serif mb-5">
        {props.content}
      </p>
      <button className="bg-orange-500 font-bold font-serif w-full px-5 py-2 rounded text-gray-800">
        {props.buttontext}
      </button>
    </div>
  );
}

export default Cards;
