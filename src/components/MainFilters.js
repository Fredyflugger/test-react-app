import { useRef, useState } from "react";

import SmallCardList from "../components/SmallCardList";

function MainFiltersForm() {
    const searchBarInputRef = useRef();
    const [searchQuery, setSearchQuery] = useState("");

    function searchHandler() {
        const enteredSearchQuery = searchBarInputRef.current.value;
        setSearchQuery(enteredSearchQuery);
    }

    return (
        <div>
            <label htmlFor="title">Search bar</label>
            <input
                type="text"
                minLength={3}
                id="title"
                onKeyUp={searchHandler}
                ref={searchBarInputRef}
            />
            <SmallCardList searchQuery={searchQuery} />
        </div>
    );
}

export default MainFiltersForm;
