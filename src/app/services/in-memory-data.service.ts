import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../components/heroes/hero';

export class InMemoryDataService implements InMemoryDbService {
    // createDb() {
    //     const heroes = [
    //         {id:10, name:'leo0'},
    //         {id:11, name:'leo1'},
    //         {id:12, name:'leo2'},
    //         {id:13, name:'leo3'},
    //         {id:14, name:'leo4'},
    //         {id:15, name:'leo5'},
    //         {id:16, name:'leo6'},
    //         {id:17, name:'leo7'},
    //         {id:18, name:'leo8'},
    //         {id:19, name:'leo9'}
    //     ];
    //     return {heroes};
    // } 
    createDb() {
        const heroes:Hero[] = [
            new Hero(10, 'leo0'),
            new Hero(11, 'leo1'),
            new Hero(12, 'leo2'),
            new Hero(13, 'leo3'),
            new Hero(14, 'leo4'),
            new Hero(15, 'leo5'),
            new Hero(16, 'leo6'),
            new Hero(17, 'leo7'),
            new Hero(18, 'leo8'),
            new Hero(10, 'leo0'),
            new Hero(11, 'leo1'),
            new Hero(12, 'leo2'),
            new Hero(13, 'leo3'),
            new Hero(14, 'leo4'),
            new Hero(15, 'leo5'),
            new Hero(16, 'leo6'),
            new Hero(17, 'leo7'),
            new Hero(18, 'leo8')
        ];
        return {heroes};
    } 
    
}