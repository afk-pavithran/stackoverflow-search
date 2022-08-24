import { useState } from "react"
import {Button, Input, Pagination, message} from 'antd'
import { SEARCH_API_ENDPOINT } from '../config/api'
import {QuestionCard} from '../components'

const Search = () => {

    const[keyWord, setKeyWord] = useState('')

    const [isSearched, setIsSearched] = useState(false)

    const [result, setResult] = useState([])

    const [totalPage, setTotalPage] = useState(0)

    const searchStackExchange = async (page = 1) => {
        setIsSearched(true)
        console.log(keyWord, page)
        const data = {
            search_params: {
                page,
                order: "desc",
                intitle: keyWord,
                pagesize: 5
            }
        }
        const searchUrl = process.env.NEXT_PUBLIC_BACKEND_URL + SEARCH_API_ENDPOINT
        console.log(searchUrl)
        const res = await fetch(searchUrl, {method: 'POST', headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)})
        const response = await res.json()
        if (res.status == 429) {
            message.info('Too Many Requests')
            console.log(response)
            setIsSearched(false)
            return
        }
        if (res.status == 200) {
            const questions = response.data.items
            setResult(questions)
            setTotalPage(100)
        }
    }

    const paginateSearch = (page, pageSize) => {
        console.log(pageSize)
        searchStackExchange(page)
    }

    

    return (
        <div className="container">
            
            <Input
                type='text' 
                placeholder='search'
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                style={{width: 400, display: 'inline', marginLeft: 100}}
            />
            <Button type="primary" style={{margin: '5px'}} onClick={() => searchStackExchange()}>Search</Button>
            <br />
            {result && result.map(el => (<QuestionCard 
                                            title={el.title} 
                                            answer_count={el.answer_count} 
                                            key={el.question_id} 
                                            question_link={el.link}
                                            />))}
            {isSearched && <Pagination 
                                showSizeChanger={false} 
                                onChange={(curret, pageSize) => paginateSearch(curret, pageSize)} 
                                defaultCurrent={1} total={totalPage} 
                            />}
        </div>
    )
}

export default Search