import { Space } from '../game_logic/space';
import { Avatar } from '../game_logic/avatar';
import { SpaceType } from '../game_logic/interfaces';

describe('#land(avatar)', () => {
  test('test space', () => {
    const start_1 = new Space('1', SpaceType.START);
    const normal_2 = new Space('2', SpaceType.NORMAL);
    const normal_3 = new Space('3', SpaceType.NORMAL);
    const ladder_4 = new Space('4', SpaceType.LADDER);
    const chute_5 = new Space('5', SpaceType.CHUTE);
    const normal_6 = new Space('6', SpaceType.NORMAL);
    const finish_7 = new Space('7', SpaceType.FINISH);

    start_1.next = normal_2;
    normal_2.next = normal_3;
    normal_3.next = ladder_4;
    ladder_4.next = chute_5;
    ladder_4.special = normal_6;
    chute_5.next = normal_6;
    chute_5.special = normal_2;
    normal_6.next = finish_7;
    finish_7.next = null;

    finish_7.back = normal_6;
    normal_6.back = chute_5;
    chute_5.back = ladder_4;
    ladder_4.back = normal_3;
    normal_3.back = normal_2;
    normal_2.back = start_1;
    start_1.back = null;

    const Heather = new Avatar(1);
    const Jane = new Avatar(3);

    start_1.land(Heather);
    expect(Heather.location.value).toEqual('1');

    start_1.land(Jane);
    expect(Jane.location.value).toEqual('1');

    Jane.move(1);
    expect(Jane.location.value).toEqual('2');

    Heather.move(1);
    expect(Heather.location.value).toEqual('2');
    expect(Jane.location.value).toEqual('3');

    Jane.move(1);
    expect(Jane.location.value).toEqual('6');

    Heather.move(3);
    expect(Heather.location.value).toEqual('2');
    expect(Jane.location.value).toEqual('6');

    Heather.move(100);
    expect(Heather.location.value).toEqual('7');
  });
});
