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
  throw new Error('Error: ' + JSON.stringify(params));     //TODO -> Aca esta el error  mi pana
  return (
    <div className="flex flex-col justify-center items-center p-24">
      <div className="font-bold text-3xl">Dinamic Category: {categories}</div>
    </div>
  )
}
export default Category;

