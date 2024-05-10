import { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Context } from '../context/Context';

const CustomSkeleton = () => {
    const { isDark } = useContext(Context);

    return (
        isDark ? (
            <SkeletonTheme baseColor="#424242" highlightColor="#616161">
                <Skeleton count={3} height={20} className="my-2" />
            </SkeletonTheme>
        ) : (
            <SkeletonTheme baseColor="#f5f5f5" highlightColor="#eeeeee">
                <Skeleton count={3} height={25} className="my-2" />
            </SkeletonTheme>
        )
    )
}

export default CustomSkeleton;