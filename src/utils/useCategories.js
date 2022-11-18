//useCategories.js
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

export default function useCategories() {
    let [filteredCategory, setfilteredCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                console.log(response)
                setfilteredCategory(response.data.filter(
                    (category) => category.enabled
                ).sort((a, b) => a.order - b.order));
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return { filteredCategory }
}
