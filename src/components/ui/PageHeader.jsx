import  PropTypes  from "prop-types";

const  PageHeader = ({headerText}) =>{
return <h1 className="page-title centered-text">{headerText}</h1>;
};
PageHeader.propTypes = {
    headerText: PropTypes.string,
    // headerText: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
headerText: 'KFC MANY',
};

export default  PageHeader;