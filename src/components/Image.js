const Image = ({ className, style, id, src, alt = "" }) => {
    return <img id={id} src={src} alt={alt} className={className} style={style} />
};

export default Image
