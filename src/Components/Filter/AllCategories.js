import Filter from "./Filter";

const AllCategories = () =>{
    return(
        <div>
            <h2>What kind of food do you like?</h2>

            {["SEAFOOD" , "ITALIAN" , "APPETIZERS" , "SALADS", "ALL"].map(category => <Filter key={category} category={category} />
            )}

        </div>
    )
}
export default AllCategories;