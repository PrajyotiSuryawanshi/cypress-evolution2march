describe('Resgestration form', () => {
    it('fill and submits the form succesfully', () => {

        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('#firstName').type('Prajyoti');
        
        cy.get('#lasttName').type('Suryawanshi');

        cy.get('#userEmail').type('prajyotisuryawanshi639@gmail.com');

        cy.get('input[name="gender"][value="female"]').check({force:true});

        cy.get('#userName').type('9322159881');

        cy.get('#dateOfBirthInput').click();
        cy.get('react-datepicker__year-select').select('2004');
        cy.get('react-datepicker__month-select"').select('April');
        cy.get('react-datepicker__day--016 ').click();

        cy.get('subjects-auto-complete__value-container').type('Science{enter}');

        cy.get('input[type="checkbox"][value=Sports]').check({force:true});

        cy.get('#uploadPicture').attachFile('q1.png');

        cy.get('#currentAddress').type('nadi stop latur');

        cy.get('#submit').click();

        




        

    });
});