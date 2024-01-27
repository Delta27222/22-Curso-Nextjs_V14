interface CategoryProps {
  params: {
    category: string;
  }
}
const Category = (props: CategoryProps) => {
  const { category } = props.params;
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="font-bold text-3xl">Dinamic Category: {category}</div>
    </div>
  )
}
export default Category;

