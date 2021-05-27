import '../css/Skill.css'

const Skill = ({data, name}) => {
    return (
        <div className='Skill center'>
            {data}
            <p>{name}</p>
        </div>
    )
}

export default Skill
