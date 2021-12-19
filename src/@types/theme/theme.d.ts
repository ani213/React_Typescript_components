declare interface Store {
    readonly theme:"light"|"dark";
    readonly changeTheme?:(data:"light"|"dark")=>void;
}