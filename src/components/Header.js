import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' ?
                <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'Red' : 'Green'} onClick={onAdd}></Button>
                : <></>
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker default title"
}

// To give the parameters a type:
//   import PropTypes from 'prop-types';
//   Header.propTypes = {
//       title: PropTypes.string.isRequired
//   }

// To give a component styling:
//   <h1 style={{ color: 'red' }}>{title}</h1>
//   <h1 style={headingStyle}>{title}</h1> <-- Mostly for dynamic styling
//   const headingStyle = {
//       color: 'red'
//   }

export default Header

// The same component but with classes:
//   import React from "react"
//   class Header extends React.Component {
//      render() {
//             return <h1>Task tracker</h1>
//      }
//   }
