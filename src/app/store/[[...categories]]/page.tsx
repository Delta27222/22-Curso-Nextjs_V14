interface CategoriesProps {
  params: {
    categories: string[];
  },
  searchParams: {
    param?: string
  }
}
const Category = (props: CategoriesProps) => {
  const { categories } = props.params;
  const params = props.searchParams;
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="font-bold text-3xl">Dinamic Category: {categories}</div>
    </div>
  )
}
export default Category;

