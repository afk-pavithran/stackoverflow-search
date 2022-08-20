import {Card, Button} from 'antd'


const QuestionCard = ({title, answer_count, question_link}) => {
    return (
        <div>
            <Card 
                title={title+'?'} 
                size='small'
                style={{width: 700, border: '2px solid black', padding: '5px', margin: '5px'}}
                >
                <h5>{answer_count} Answers</h5>
                <Button type='link'>
                    <a target='_blank' href={question_link}>View</a>
                </Button>
            </Card>
        </div>
    )
}

export default QuestionCard