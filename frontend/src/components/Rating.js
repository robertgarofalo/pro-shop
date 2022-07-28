import PropTypes from 'prop-types'

const Rating = ({value, text, color}) => {
   
  return (
    <div className="rating">
        <span>
            {[...Array(5)].map((_, i) => {
                const cls = value >= i + 1
                ? 'fas fa-star'
                : value >= i + .5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
                return <i key={'star' + i} style={{ color }} className={cls} /> 
            })}
            <span>{text && text}</span>
        </span>
    </div>
  )
}

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string
}

export default Rating