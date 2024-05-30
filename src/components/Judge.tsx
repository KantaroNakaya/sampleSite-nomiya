type judgeProps = {
    results: {
      conditionText: string;
    };
};


const Judge: React.FC<judgeProps> = ({ results }) => {
    const isRainy = results.conditionText.includes('rain');
    const className = isRainy ? 'discount-day' : 'normal-day';
    const message = isRainy ? '雨天のため、10%割引で楽しめます！' : '雨天でないため、通常料金となります';
    const message02 = isRainy ? '来店時に画面をお見せください。': '' ;
  
  
    return (
        <div className="flex-container judge-container">
            <div className={className}>
                <p>{message}<br></br>{message02}</p>
            </div>
        </div>
    )
};


export default Judge