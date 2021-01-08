export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e) {}
    }

    bindTriggers(x, y, z) {
        x.querySelector('.plus').addEventListener('click', () => {
            if (y !== z.length - 2) {
                z[y].style.display = 'flex';
                y++;
            } else {
                z[y].style.display = 'flex';
                z[z.length - 1].remove();
            }
        });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bindTriggers(this.oldOfficer, this.oldCounter, this.oldItems);
            this.bindTriggers(this.newOfficer, this.newCounter, this.newItems);
        } catch (e) {}
    }
}