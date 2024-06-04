import PropTypes from 'prop-types';

export function User ({user}) {

    return (
        <ul className='cart'>
            {
            user.map(user => (
                <li key={user.id}>
                    <h3>{user.name.first}</h3>
                    <img src={user.picture} alt={user.name} />
                </li>
            ))
            }
        </ul>
    )
}

User.propTypes = {
    user: PropTypes.array.isRequired
};
