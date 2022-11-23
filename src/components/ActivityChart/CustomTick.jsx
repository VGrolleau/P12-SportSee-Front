function CustomTick(payload) {
    const FORMAT_DATE = new Date(payload.payload.value).toLocaleDateString("fr");
    return (
        <p>prout</p>
    );
}

export default CustomTick;