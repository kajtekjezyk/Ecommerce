import React, { useMemo }  from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = props => {
    const previewData = useMemo(() => {
        return (
            props.items
                .filter((item, idx) => idx < 4 )
                .map(({id, name, imageUrl, price}) => {
                    return (
                        <CollectionItem
                            key={id}
                            name={name}
                            imageUrl={imageUrl}
                            price={price}
                        />
                    )
                }
            )
        )
    }, [props.items])

    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {previewData}
            </div>
        </div>
    )
    
}

export default CollectionPreview;

