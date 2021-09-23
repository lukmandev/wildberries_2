import {Formik} from "formik";

const SearchForm = () => {

    return (
        <Formik
            initialValues={{
                searchText: "",
            }}
            onSubmit={(values, actions) => {
                ""
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit} className="header__search-form grid">
                    <input type="text" className="w-full" placeholder="Я ищу..." />
                    <div className="search__form-icons h-full flex items-center">
                        <button type="submit" className="flex items-center">
                            <i className="far fa-search cursor-pointer" />
                        </button>
                        <i className="fal fa-camera-alt cursor-pointer" />
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default SearchForm;