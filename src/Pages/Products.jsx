import { Box, Button, Heading, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import "../CSS/Products.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { renderProductsData } from "../Redux/RenderUI";
import ProductsCard from "../Components/ProductsCard";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";


const Products = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [categoryValue, setCategoryvalue] = useState("");
    const [sortvalue, setSortvalue] = useState("");
    const [filtervalue, setFiltervalue] = useState("");
    const [ratingvalue, setRatingvalue] = useState("");

    let filterQuery = "";
    let ratingQuery = "";

    if (filtervalue !== "") {
        const [minPrice, maxPrice] = filtervalue.split(" - ");
        filterQuery = `price_gte=${minPrice}&price_lte=${maxPrice}`
        console.log(filterQuery);
    }
    if (ratingvalue !== "") {
        const [minRating, maxRating] = ratingvalue.split(" - ");
        ratingQuery = `rating_gte=${minRating}&rating_lte=${maxRating}`
        console.log(ratingQuery);
    }


    useEffect(() => {
        renderProductsData(dispatch, page, sortvalue, categoryValue, filterQuery, ratingQuery)
    }, [dispatch, page, sortvalue, categoryValue, filterQuery, ratingQuery])

    const handlePrevPagination = () => {
        setPage((page) => page - 1)
    }
    const handleNextPagination = () => {
        setPage((page) => page + 1)
    }

    const handleSorting = (e) => {
        setSortvalue(e.target.value)
    }

    let { isLoading, isError, products } = useSelector((store) => store.productsReducer);

    return (
        <div className="first_container">
            <div className="breadcrumbs_div">

            </div>
            <div className="main-container">
                <div className="filter_container">
                    <Heading size={"md"}>FILTER PRODUCTS</Heading>
                    <Box>
                        <Heading size="md" mt={"10px"}>By Category </Heading>
                        <RadioGroup onChange={setCategoryvalue} value={categoryValue} >
                            <Stack direction='row' style={{ justifyContent: "center", marginTop: "5px" }}>
                                <Radio value='male'>Mens</Radio>
                                <Radio value='female'>Womens</Radio>
                                <Radio value='kids'>Kids</Radio>
                            </Stack>
                        </RadioGroup>
                        <Button size='md'
                            height='35px'
                            width='200px'
                            border='2px'
                            borderColor='green.500'
                            bg='orangered'
                            marginTop="10px"
                            onClick={() => setCategoryvalue("")} >
                            CLEAR ALL </Button>

                    </Box>
                    <Box>
                        <Heading size="md" mt={"10px"}>By Price</Heading>
                        <PriceFilter filtervalue={filtervalue} setFiltervalue={setFiltervalue} />

                    </Box>
                    <Box>
                        <Heading size="md" mt={"10px"}>By Rating</Heading>
                        <RatingFilter ratingvalue={ratingvalue} setRatingvalue={setRatingvalue} />

                    </Box>
                </div>
                <div className="products_container">
                    <div className="sorting_div">
                        <Select onChange={handleSorting} placeholder='SORTING'>
                            <option value="asc">LOW TO HIGH</option>
                            <option value="desc">HIGH TO LOW</option>
                            <option value="discount">DISCOUNT</option>
                        </Select>

                    </div>
                    <Heading size={"md"}>Products Card</Heading>
                    {
                        isLoading ? <Loading /> : isError ? <Error /> :
                            <Box
                                display={"grid"}
                                gridTemplateColumns={"1fr 1fr 1fr"}
                                p={"5px 25px 25px 25px"}
                                mt={"30px"}
                                gap={"1.8rem"}
                                gridColumnGap={"2rem"}

                            >
                                {products?.map((products) => <ProductsCard products={products} />)}
                            </Box>

                    }
                    <Box className="pagination_container">
                        <Button isDisabled={page === 1 ? true : false} onClick={handlePrevPagination} >Prev</Button>&emsp;
                        <Button>{page}</Button>&emsp;
                        <Button isDisabled={page === 2 ? true : false} onClick={handleNextPagination} >Next</Button>
                    </Box>
                </div>
            </div>
        </div >

    )
}

export default Products;