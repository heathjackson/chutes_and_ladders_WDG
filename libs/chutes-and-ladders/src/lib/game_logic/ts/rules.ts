import { ISpace, SpaceType } from './interfaces';

const FirstSpaceValidator = (space: ISpace) => {
  return (
    space != undefined &&
    space.type == SpaceType.START &&
    space.next != undefined
  );
};
const LastSpaceValidator = (space: ISpace) => {
  return (
    space != undefined &&
    space.type == SpaceType.FINISH &&
    space.back != undefined
  );
};

export default { LastSpaceValidator, FirstSpaceValidator };
