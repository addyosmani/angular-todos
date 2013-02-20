angular.module('directives', []).directive('opendialog',
   function() {
      var openDialog = {
         link :   function(scope, element, attrs) {
            function openDialog() {
              var element = angular.element('#note');
              element.modal('show');
            }
            element.bind('click', openDialog);
       }
   }
   return openDialog;
});  